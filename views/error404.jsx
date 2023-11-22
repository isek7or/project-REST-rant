const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img src="/images/error-404.jpg" alt="Error 404" />
          <div>
            Photo by <a href="https://unsplash.com/@introspectivedsgn">Erik Mclean</a> on <a href="https://unsplash.com/photos/black-and-blue-laptop-computer-bGWVhFY1gH0">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404
