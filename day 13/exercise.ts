/** @format */

// Create a code that could handle a queue on food ordering process, with this specification:
// Create a class to handle queuing process in a file.
// Create file to handle and execute queue class.
// Each queue process takes a random interval from 1-10 seconds.
// Clue : Use while & promise

export class Queue {
  foods: string[] = [];

  queue(food: string) {
    this.foods.push(food);
  }

  async proceed() {
    let i = 0;
    while (i < this.foods.length) {
      const time = Math.ceil(Math.random() * 9) * 1000; //ms

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.foods[i]);
        }, time);
      }).then((res) => {
        console.log(`Queue 1 ${res} Done in ${time / 1000} minutes`);
        i++;
      });
    }
  }
}
