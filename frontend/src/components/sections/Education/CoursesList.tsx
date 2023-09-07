import { ChangeEvent, FC, useState } from 'react';
import { COURSERACOURSES } from '../../../data/courses/Coursera';
import { CourseraCourseCard } from './CourseraCourseCard';
import { UDEMYCOURSES } from '../../../data/courses/Udemy';
import { UdemyCourseCard } from './UdemyCourseCard';
import styled, { css } from 'styled-components';
import { STRING_BREAKPOINTS } from '../../../common/constants';
import React from 'react';

enum CourseTypes {
  All = 'All',
  Coursera = 'Coursera',
  Udemy = 'Udemy',
}

const border = { thickness: '2px', radius: '8px', style: 'solid' };
const borderColor = css`
  border-color: ${props => props.theme.fg};
`;

const Wrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  max-height: 90vh;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    margin-bottom: 1.25rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    text-align: center;
    padding-bottom: 8px;
  }

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    display: flex;
    flex-direction: column;
  }
`;

const FilterPanel = styled.div`
  ${borderColor}
  border-bottom: ${border.thickness} ${border.style};
  margin: 0 calc(${border.radius} * 2);
  margin-bottom: -${border.thickness};
  gap: 8px;
  display: flex;
  flex-grow: 1;
  z-index: 2;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    margin-left: calc(${border.radius} * 2);
    overflow-x: auto;
    overflow-y: hidden;
  }

  align-items: end;

  input {
    display: none;
  }

  label {
    ${borderColor}
    border-radius: ${border.radius} ${border.radius} 0 0;
    border: ${border.thickness} ${border.style} ${props => props.theme.fg};
    margin-bottom: -${border.thickness};

    background-color: ${props => props.theme.bg};
    padding: 6px;
    flex: 1 1 0;
    max-width: 200px;
    text-align: center;
    font-weight: bold;
    font-size: large;
    cursor: pointer;

    @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
      padding: 3px;
    }
  }

  label:hover {
    color: ${props => props.theme.secondaryAlt};
    padding-bottom: 8px;
  }

  input[type='radio']:checked + label {
    color: ${props => props.theme.secondary};
    border-bottom: ${props => props.theme.bg};
    padding-bottom: 12px;
    cursor: default;

    @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
      background-color: ${props => props.theme.fg};
      color: ${props => props.theme.bg};
    }
  }
`;

const CourseBorder = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;

  ${borderColor}
  border: ${border.thickness} ${border.style};
  border-radius: ${border.radius};
  padding: 12px 2px;
`;

const CourseContainer = styled.div`
  margin-bottom: auto;
  flex: 1 1 0;

  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(475px, 1fr));
  grid-template-rows: repeat(auto-fit, 135px);
  gap: 4px;
  overflow: auto;
  z-index: 1;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    overscroll-behavior: none;
    display: flex;
    flex-direction: column;
    max-height: 42vh;
    flex: 0 0 auto;
  }
`;

export const CoursesList: FC = () => {
  const [activeFilter, changeFilter] = useState<CourseTypes>(CourseTypes.All);

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    changeFilter(e.target.value as CourseTypes);
  }

  function CreateFilterButton(courseType: CourseTypes) {
    const name = courseType.toString();
    return (
      <React.Fragment key={name}>
        <input
          type='radio'
          name='filter'
          id={name}
          value={courseType}
          onChange={e => handleFilterChange(e)}
          checked={activeFilter === courseType}
        />
        <label htmlFor={name}>{name}</label>
      </React.Fragment>
    );
  }

  const CourseraCourses = COURSERACOURSES.courses.map(course => {
    return {
      element: <CourseraCourseCard key={course.credentialID} course={course} />,
      courseType: CourseTypes.Coursera,
      date: course.date,
    };
  });
  const UdemyCourses = UDEMYCOURSES.courses.map(course => {
    return {
      element: <UdemyCourseCard key={course.id} course={course} />,
      courseType: CourseTypes.Udemy,
      date: course.date,
    };
  });

  return (
    <Wrapper>
      <Header>
        <h2>Completed Courses</h2>
        <FilterPanel>
          {(Object.keys(CourseTypes) as Array<keyof typeof CourseTypes>).map(courseType =>
            CreateFilterButton(CourseTypes[courseType]),
          )}
        </FilterPanel>
      </Header>

      <CourseBorder>
        <CourseContainer>
          {[...UdemyCourses, ...CourseraCourses]
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .filter(
              course => activeFilter === CourseTypes.All || course.courseType === activeFilter,
            )
            .map(course => course.element)}
        </CourseContainer>
      </CourseBorder>
    </Wrapper>
  );
};
