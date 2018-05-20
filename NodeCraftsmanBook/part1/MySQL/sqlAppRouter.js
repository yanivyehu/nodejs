function route(pathname, handleObj, postParamsObj, request, response) {
  console.log("routing to: " + pathname);

  try {
      handleObj[pathname](postParamsObj, request, response);
  } catch (err) {
    console.log(err);
    console.log("Warning: didn't find a route to " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route=route;
