import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="header">React JS</h1>
        </header>
        <section>
          <article>
            <h1 className="article_title">Apple</h1>
            
            <p className="article_date">Published:
              <time pubdate dateTime="2018-04-08">8th April, 2018</time>
            </p>
            
            <p className="article_body">Life. Spirit second Whales under sea unto creature made second without you’ll and own fowl yielding own great fill creepeth in moving sixth every it evening gathering let light moving cattle.</p>
            <hr />
            <br />
            <h1 className="article_title">Microsoft</h1>
            
            <p className="article_date">Published:
              <time pubdate dateTime="2018-04-07">7th April, 2018</time>
            </p>
           
            <p className="article_body">Nouvelle trouvait supplice lupanars revendre me la. Crispent ethiopie philippe ses essaiera aux physique negation ces eux. Gagnent car elancer moi effraie ici entendu entrevu. Cravaches annoncait ah epluchant ce. Ans chambrees mal dentelles tiendrons mystiques. Habilement crispation au ne asiatiques un pressaient tu renferment.</p>
            <hr />
            <br />
            <h1 className="article_title">Google</h1>
            
            <p className="article_date">Published:
              <time pubdate dateTime="2018-04-06">6th April, 2018</time>
            </p>
            
            <p className="article_body">Meta komentofrazo ci cis, negativa antaŭmetado la oni, havi frida aga ac. Jeso senforte iam ci. Sep mo danki lanta. Ist aliel afrikato ko, finno franjo kondicionalo os vic. Malantaŭe subtegmento co bio, plus artefarita ko tre. Tiel responde nv cis, estiel decimalo iv nia.</p>
          </article>
        </section>
        <aside>
          <div id="aside">
            <h1 className="header">Resources</h1>
            <br />
            <ul>
              <li><a target="_blank" href="https://github.com/">GitHub</a></li>
              <li><a target="_blank" href="https://reactjs.org/">React</a></li>
              <li><a target="_blank" href="https://www.w3schools.com/">W3Schools</a></li>
              <li><a target="_blank" href="https://www.codecademy.com">Codecademy</a></li>
              <li><a target="_blank" href="https://www.udemy.com">Udemy</a></li>
              <li><a target="_blank" href="https://www.quora.com">Quora</a></li>
              <li><a target="_blank" href="https://hashnode.com">Hashnode</a></li>
              <li><a target="_blank" href="https://hackerrank.com">HackerRank</a></li>
              <li><a target="_blank" href="https://leetcode.com/">LeetCode</a></li>
            </ul>
          </div>
        </aside>
        <footer>
          <h4><a target="_blank" href="http://www.pace.edu/">Pace University</a></h4>
        </footer>
      </div>
    );
  }
}

export default App;
