import React, { useState, useEffect } from "react";
import './Loader.css'
import { Box, Stack, Skeleton } from "@mui/material";
import Posts from "../Posts/Posts";
import PostUpload from "../Posts/PostUpload";
import { FetchPosts } from "../../utils/APIs";

const SkeletonLoader = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const limit = 50;

  useEffect(() => {
    const fetchData = async() => {
      try {
        const postsData = await FetchPosts(limit);

        // Filter posts to show only one post per unique name
        const filteredPosts = postsData.reduce((accumulator, currentPost) => {
          if (!accumulator[currentPost.author.name]) {
            accumulator[currentPost.author.name] = currentPost;
          }
          return accumulator;
        }, {});

        setPosts(Object.values(filteredPosts));
        // console.log('postsData', postsData);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchData();
  }, [])

  setTimeout(() => {
    setLoading(false);
  }, [2000]);

  return (
    <Box p={{ xs: 0, md: 2 }} className='feeds'>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="text" height={100} />
        </Stack>
      ) : (
        <>
          <PostUpload />
          {posts && posts.map((post, _id) => (
            <Posts key={_id} {...post} />
          ))}
        </>
      )}
    </Box>
  );
};

export default SkeletonLoader;