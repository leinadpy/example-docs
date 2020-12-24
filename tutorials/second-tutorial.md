## my second tutorial


asdasdasd asdas as asadsasd

```js
/**
 * Class to create a programmer
 * @example
 * const newProgrammer = new Programmer({fullName: 'Ryan Ray'}, language: 'javascript')
 * newProgramme.getInfo();
 * 
 * @see http://127.0.0.1:5500/docs/Programmer.html
 * 
 * @todo Implement the rest of the method
 * @tutorial first-tutorial
 */
class Programmer {
  /**
   * @param {{fullName: string}} user User's information
   * @param {string} language A programming language
   */
  constructor(user, language) {
    this.fullName = user.fullName;
    this.language = language;
  }

  /**
   * Get Programmer info
   * @returns {void} Print a message with the data
   */
  getInfo() {
    console.log(
      `I'm ${this.fullName} and my favorite programming language is ${this.language}`
    );
  }
}

/**
 * Know more in {@link Programmer}
 */
const programmerOne = new Programmer({ fullName: "Ryan Ray" }, "javascript");
const programmerTwo = new Programmer({ fullName: "Joe" }, "Go");

programmerOne.getInfo();
programmerTwo.getInfo();
```