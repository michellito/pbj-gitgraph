import React, { useEffect } from 'react';
import { Gitgraph, templateExtend } from '@gitgraph/react';

const Graph = () => {

  let options = {
    template: templateExtend("metro", {
      colors: ["#1c4587", "#cc4125", "#b45f06"],
      commit: {
        message: {
          displayAuthor: true,
          displayHash: false
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
          // main.commit({
          //   subject: "Add step by step instructions",
          //   author: michelle
          // });

          // add crunchy branch
          // const crunchy = gitgraph.branch('make-it-crunchy');
          // crunchy.commit({
          //   subject: "Add potato chips",
          //   author: michelle
          // });
          // crunchy.commit({
          //   subject: "Add crunchy peanut butter",
          //   author: michelle
          // });

          // main.merge(crunchy);

        }}
      </Gitgraph>
  );
};

export default Graph;