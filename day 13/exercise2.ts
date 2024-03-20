/** @format */

import { Queue } from "./exercise";

const queueFoods = new Queue();

queueFoods.queue("capcay");
queueFoods.queue("nasi goreng");
queueFoods.queue("bakso");

console.log(queueFoods.foods);

queueFoods.proceed();
