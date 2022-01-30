const element = (
  <div className="about">
    <h1>Matthew Spire</h1>

    <img src="/images/MatthewSpire.jpg" className="me" alt="Picture of Matthew Spire"></img>

    <h2>Software Engineer</h2>

    <p className="bio">
      I am a full-time software developer covering mobile, web, as well as other technologies. I enjoy programming and software development because I love to 
      solve problems.
    </p>
    <p className="bio">
      I love to learn, both inside and outside the classroom. As far as formal education, I am taking CS 646 and CS 648 via SDSU Global Campus while I try and get 
      back to pursuing my Master's in Computer Science.
    </p>
    <p className="bio">
      When I am not working or going to school, I like to play golf, run, play video games, and walk my dog.
    </p>

    <a href='https://github.com/matthew-spire/assignment1' target="_blank" rel="noopener noreferrer"><button className="button">View My GitHub Repo</button></a>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));