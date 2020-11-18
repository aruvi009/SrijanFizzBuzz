
/**
 * FizzBizz Route definitions
 * 
 * INFO : 
 * We are using the express router object to create subpaths and get the request methods and assign a callback
 */

module.exports = function (router) {
  router.get('/:count?', (req, res) => {
    const count = req.params.count;
    let output = [];
    if (isNaN(count)) {
      output = "Count should be a number";
    } else {
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          output.push((i % 3 ? '' : 'Fizz') + ((i % 5) ? '' : 'Buzz') || i)
        }
      } else {
        output = "Count should be greater than 0";
      }
    }
    res.json(JSON.stringify(output));
  });
  
  return router;
}