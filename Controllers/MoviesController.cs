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
        public IEnumerable<string[]> Get()
        {
            List<Movie> MovieList = context.Movies.ToList();
            foreach (Movie movie in MovieList)
            {
                yield return new string[] { $"{movie.Title}", $"{movie.Genre}", $"{movie.DirectorName}" };
            }
        }

        // GET: api/Movies/5
        public string[] Get(int id)
        {
            var movie = context.Movies.Where(m => m.Id == id).SingleOrDefault();
            return new string[] { $"{movie.Title}", $"{movie.Genre}", $"{movie.DirectorName}" };
        }

        // POST: api/Movies
        public void Post([FromBody]string value)
        {

        }

        // PUT: api/Movies/5
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE: api/Movies/5
        public void Delete(int id)
        {

        }
    }
}
