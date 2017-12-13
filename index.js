// only run when the substr function is broken
if ('ab'.substr(-1) != 'b')
{
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  module.exports = String.prototype.substr = function(substr) {
    return function(start, length) {
      // did we get a negative start?
      if (start < 0) {
        // calculate how much it is from the beginning of the string
        start = this.length + start;

        // if start is still negative then set it to the beginning of
        // the string
        if (start < 0) start = 0;
      }
      
      // call the original function
      return substr.call(this, start, length);
    }
  }(String.prototype.substr);
}
