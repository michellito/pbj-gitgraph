import React, { useEffect } from 'react';
import { Gitgraph, templateExtend } from '@gitgraph/react';

const Graph = () => {

  let options = {
    template: templateExtend("metro", {
      colors: ["#1c4587", "#e69138", "#cc4125", "green"],
      commit: {
        message: {
          displayAuthor: true,
          displayHash: true
        }
      }
    })
  };

  return (
      <Gitgraph options={options}>
        {(gitgraph)  => {

          // custom authors
          const michelle = "Michelle Yung <myung@arizona.edu>"
          const mona = "Mona Octocat <mona@github.com>"
          
          // create main branch
          const main = gitgraph.branch('main')

          main.commit({
            subject: "Add title and ingredients list",
            author: michelle
          });
          main.commit({
            subject: "Add step by step instructions",
            author: michelle
          });

          // add crunchy branch
          const crunchy = gitgraph.branch('make-it-crunchy');
          crunchy.commit({
            subject: "Add potato chips",
            author: michelle
          });
          crunchy.commit({
            subject: "Swap crunchy pb",
            author: michelle
          });
          crunchy.commit({
            subject: "Revert crunchy pb",
            author: michelle
          });

          main.merge(crunchy);


          // add homemade bread branch
          const bread = main.branch('homemade-bread');
          bread.commit({
            subject: "Add homemade bread recipe",
            author: michelle
          });
          bread.commit({
            subject: "Adjust flour amount",
            author: michelle
          });

          // add spicy branch by collaborator
          const spicy = main.branch('make-it-spicy');
          spicy.commit({
            subject: "Add green chile",
            author: mona
          });



        }}
      </Gitgraph>
  );
};

export default Graph;