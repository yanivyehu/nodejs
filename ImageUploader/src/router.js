function route(pathname, postData, handleObj, request, response) {
  console.log("routing to: " + pathname);

  try {
      handleObj[pathname](request, response, postData);
  } catch (err) {
    console.log("Warning: didn't find a route to " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route=route;
