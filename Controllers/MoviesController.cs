using MovieProjectRemade.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieProjectRemade.Controllers
{
    public class MoviesController : ApiController
    {
        private ApplicationDbContext context;
        public MoviesController()
        {
            context = new ApplicationDbContext();
        }
        // GET: api/Movies
        public IEnumerable<Movie> Get()
        {
            return context.Movies.ToArray();
        }

        // GET: api/Movies/5
        public Movie Get(int id)
        {
            return context.Movies.Where(m => m.Id == id).SingleOrDefault();
        }

        // POST: api/Movies
        [HttpPost]
        public void Post([FromBody]Movie movies)
        {
            Movie AddedMovie = new Movie();
            AddedMovie.Genre = movies.Genre;
            AddedMovie.Title = movies.Title;
            AddedMovie.DirectorName = movies.DirectorName;
            context.Movies.Add(AddedMovie);
            context.SaveChanges();
        }

        // PUT: api/Movies/5
        public Movie Put(int id, [FromBody]Movie movie)
        {
         
            var editMovie = context.Movies.Where(m => m.Id == id).SingleOrDefault();
            if (editMovie is null || movie is null)
            {
                return null;
            }
            editMovie.Title = movie.Title;
            editMovie.Genre = movie.Genre;
            editMovie.DirectorName = movie.DirectorName;
            context.SaveChanges();
            return editMovie;
        }

        // DELETE: api/Movies/5
        public void Delete(int id)
        {
            var movie = context.Movies.Where(m => m.Id == id).SingleOrDefault();
            context.Movies.Remove(movie);
            context.SaveChanges();
        }
    }
}
