/* eslint-disable react/react-in-jsx-scope */

const Lesson = (props: { path }) => {
  //
  return (
    <div>
      <p className="text-2xl">HELLLOO</p>
      <p>{JSON.stringify(props.path)}</p>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const path = params.lesson.join("/");
  const lessonPath = "../../api/studentPortal/lessons/web/react/components";
  const { getLessonData } = await import(`${lessonPath}`);
  return {
    props: { path },
  };
};

export default Lesson;
