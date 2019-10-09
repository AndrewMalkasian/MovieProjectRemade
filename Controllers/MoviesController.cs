﻿using MovieProjectRemade.Models;
using Newtonsoft.Json;
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
        //public void Post([FromBody]string value)
        //{
        //    var movie = new Movie();
        //    movie.Title = value;
        //    movie.Genre = value;
        //    movie.DirectorName = value;
        //}
        [HttpPost]
        public object Post([FromBody]string jsonString)
        {
            // add reference to Newtonsoft.Json
            //  using Newtonsoft.Json;

            // jsonString to myJsonObj
            var myJsonObj = JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(jsonString);

            // value1 is myJsonObj[key1]
            var valueOfkey1 = myJsonObj["key1"];

            return myJsonObj;
        }
        // PUT: api/Movies/5
        public void Put(int id, [FromBody]string value)
        {

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
