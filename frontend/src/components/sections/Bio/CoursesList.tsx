import { ChangeEvent, FC, useState } from 'react';
import { COURSERACOURSES } from '../../../data/courses/Coursera';
import { CourseraCourseCard } from './CourseraCourseCard';
import { UDEMYCOURSES } from '../../../data/courses/Udemy';
import { UdemyCourseCard } from './UdemyCourseCard';
import styled, { css } from 'styled-components';
import { STRING_BREAKPOINTS } from '../../../common/constants';

enum CourseTypes {
  All = 'All',
  Coursera = 'Coursera',
  Udemy = 'Udemy',
}

const border = { thickness: '2px', radius: '8px', style: 'solid' };
const borderColor = css`
  border-color: ${props => props.theme.fg};
`;

const Header = styled.div`
  display: flex;
  gap: 8px;

  h2 {
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
  margin-right: calc(${border.radius} * 2);
  margin-bottom: -${border.thickness};
  gap: 8px;
  display: flex;
  flex-grow: 1;
  z-index: 2;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    overflow-x: auto;
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
  }

  label:hover {
    color: ${props => props.theme.secondaryAlt};
    padding-bottom: 12px;
  }

  input[type='radio']:checked + label {
    color: ${props => props.theme.secondary};
    border-bottom: ${props => props.theme.bg};
    padding-bottom: 12px;
    cursor: default;
  }
`;

const CourseContainer = styled.div`
  ${borderColor}
  border: ${border.thickness} ${border.style};
  border-radius: ${border.radius};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(475px, 1fr));
  padding: 8px 4px;
  gap: 4px;
  overflow: auto;
  direction: rtl;
  max-height: 90vh;
  z-index: 1;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    display: flex;
    flex-direction: column;
    max-height: 50vh;
  }
`;

export const CoursesList: FC = () => {
  const [activeFilter, changeFilter] = useState<CourseTypes>(CourseTypes.All);

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('changed to ' + e.target.value);
    changeFilter(e.target.value as CourseTypes);
  }

  function CreateFilterButton(courseType: CourseTypes) {
    const name = courseType.toString();
    return (
      <>
        <input
          type='radio'
          name='filter'
          id={name}
          value={courseType}
          onChange={e => handleFilterChange(e)}
          checked={activeFilter === courseType}
        />
        <label htmlFor={name}>{name}</label>
      </>
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
    <div style={{ flexGrow: 1 }}>
      <Header>
        <h2>Completed Courses</h2>
        <FilterPanel>
          {(Object.keys(CourseTypes) as Array<keyof typeof CourseTypes>).map(courseType =>
            CreateFilterButton(CourseTypes[courseType]),
          )}
        </FilterPanel>
      </Header>

      <CourseContainer>
        {[...UdemyCourses, ...CourseraCourses]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .filter(course => activeFilter === CourseTypes.All || course.courseType === activeFilter)
          .map(course => course.element)}
        {[...UdemyCourses, ...CourseraCourses]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .filter(course => activeFilter === CourseTypes.All || course.courseType === activeFilter)
          .map(course => course.element)}
        {[...UdemyCourses, ...CourseraCourses]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .filter(course => activeFilter === CourseTypes.All || course.courseType === activeFilter)
          .map(course => course.element)}
        {[...UdemyCourses, ...CourseraCourses]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .filter(course => activeFilter === CourseTypes.All || course.courseType === activeFilter)
          .map(course => course.element)}
        {[...UdemyCourses, ...CourseraCourses]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .filter(course => activeFilter === CourseTypes.All || course.courseType === activeFilter)
          .map(course => course.element)}
        {[...UdemyCourses, ...CourseraCourses]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .filter(course => activeFilter === CourseTypes.All || course.courseType === activeFilter)
          .map(course => course.element)}
      </CourseContainer>
    </div>
  );
};
