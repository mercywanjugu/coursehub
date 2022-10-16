import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses")
      .then((r) => r.json())
      .then(setCourses);
  }, []);

  return (
    <Wrapper>
      {courses.length > 0 ? (
        courses.map((courses) => (
          <Course key={courses.id}>
            <Box>
              <h2>{courses.title}</h2>
              <p>
                <em>Time to Complete: {courses.months_to_complete} months</em>
                &nbsp;·&nbsp;
                <cite>By {courses.user.username}</cite>
              </p>
              <ReactMarkdown>{courses.description}</ReactMarkdown>
            </Box>
          </Course>
        ))
      ) : (
        <>
          <h2>No courses Found</h2>
          <Button as={Link} to="/new">
            Make a New course
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Course = styled.article`
  margin-bottom: 24px;
`;

export default CourseList;