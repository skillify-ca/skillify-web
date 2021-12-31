import Navbar from "../../../../../components/Navbar";

const Warmups1 = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 bg-white p-8 m-8 space-y-4">
        <h1 className="font-bold text-5xl">Warmups 1</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white space-y-4">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lesson</p>
            <p>
              Make sure you download or sign up for all of these programs to get
              started. Message Vithushan if you're having trouble.
            </p>
            <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 gap-8">
              <li>
                {" "}
                <div className="flex flex-col shadow-lg p-4 rounded-xl bg-blue-100 hover:scale-110 transform transition-all">
                  <a href="https://code.visualstudio.com/download">
                    Visual Studio Code
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
                      className="w-24"
                    />
                  </a>
                  Just like how Microsoft Word is a text editor for editing
                  text, Visual Studio Code is a code editor for editing code and
                  also made by Microsoft.
                </div>
              </li>
              <li>
                {" "}
                <div className="flex flex-col shadow-lg p-4 rounded-xl bg-blue-100 hover:scale-110 transform transition-all">
                  <a href="https://grasshopper.app/">
                    Grasshopper
                    <img
                      src="https://grasshopper.app/assets/static/images/home-touts/adventure__waving.svg"
                      className="w-24"
                    />
                  </a>
                  Go through the Fundamentals 1 course and finish all the levels
                  and challenges. This app is a good introduction to learning
                  JavaScript.
                </div>
              </li>
              <li>
                {" "}
                <div className="flex flex-col shadow-lg p-4 rounded-xl bg-blue-100 hover:scale-110 transform transition-all">
                  <a href="https://tuple.app/">
                    Tuple (MacOS only)
                    <img
                      src="https://tuple.app/img/logo-white.jpg"
                      className="w-24"
                    />
                  </a>
                  Tuple is a pair programming tool that lets us code on the same
                  screen together.
                </div>
              </li>
              <li>
                {" "}
                <div className="flex flex-col shadow-lg p-4 rounded-xl bg-blue-100 hover:scale-110 transform transition-all">
                  <a href="https://www.codecademy.com/learn/introduction-to-javascript">
                    Codecademy
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUQFi////8AACAIECsAABiWmJ8tMUUAACLDxMgAAAf6+vqGh5AAAAB/gIgLEi0bIDa2t70AAB0AACUAABcAABOpq7EACiltb3gAABBLTlwABScAAAwlKT6mp607P0/t7u9lZ3NYW2eam6Pj4+bU1dg0OElER1bIyM12eIKNj5fQ0dRVV2MeIzmztLkWGzWPLQo/AAADL0lEQVR4nO3ba1uiQBiAYUCUPE2ANIKlppaHDvv/f97W6gKWjLLG0mvP/a3R5vK5pOGYZQEAAAAAAAAAAAAAAAAAAAAAAAAAAOAYdduugFd3VkapTgXszfdJbLTsKqzcusNSFRVeUfj/UEghhfX7UYVNfX2mu29e2PfUmXrfvvDcySisBYWlUFgLCkuhsBYUlkJhLSgshcJaUFgKhbWgsBQKa0FhKTILG6HnBIHjjdTxyeQVqnAQtYbd+Xg8796HUaCPTCatUAXB8KqTvmwvxpPY3CisMAzmubythyQybayyCqPZ9GPfO98zfI2iCuPmob4308fiJVdSYe+mIPBNEhZNJqgw2BQH2vZjo2AyOYV6aQq0l/IL24t80HTl+6ts2Zm25G+l4TDX5y/jgetG0eRq+/ODLl5MxRRGD1ngsL0L0rfJ++7R7xVtopacwvzDC+vcJw1fpvbm1jSZlEIvW0ifevn36rvE/MGlFA5W6dBstP/mI4feUgrb6brZGZSbTEih8rKNNCo3mZDCxmM6chOUm0xIoX5ORzZOucmEFI7u05FuySs38grLXpsSUpg7ZqPwIyGFl7+VjmbZWnqZhTpJR+aXubdQL//8OYUUWlE6sjCeK30mpTDOrmFcn3CzIkdKoetnS83+H2J4ZOWRUhiu06Hp3kX8wboZG79UKYVK29kn7aVJqt237dXAdBIspdAa+LlEL9DqvdoN/4wuXgqvJQoq1JOs0O6Mk6DXc57HuxtRnaT4pFFMoRXlvsTP1oXHAXIKlf505zBvVvS3KKfQGk0Ole0sdNGCKqjQcmbFgWHhVW9JhZazPHgL2LZfDfe5RRVao/D1QN/03rTPl1Voqaj1cUld9CPD3lBc4dtrbrj2F3/3g0/zZXQhx6U5Kgxi926ZJJNfceQce2BIYuH2LVrrxkmnUVILT0dhLSgshcJa/KjCdeyc6UChZ/wFw5MrVRQ+bZpnuvlUODLOOS98fqyawq+0K9x7uuqAsrfRKaSQQgoppLAiYb/79TaT7a5cXftGhdeWvzbRq8DfYxUVuAZH/5EKAAAAAAAAAAAAAAAAAAAAAAAAAADgBL8BQQRVxH2O170AAAAASUVORK5CYII="
                      className="w-24"
                    />
                  </a>
                  This is an online course on Javascript. This should solidify
                  the concepts you learned in Grasshopper. There is also a
                  mobile app called Codecademy GO that has challenges as well.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warmups1;
