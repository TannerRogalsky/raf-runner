import Timer from 'raf-timer';

const tasks = {};
let taskID = 0;

// executes in the context of a 'task'
const update = function() {
  const dt = this.timer.delta;
  const mt = this.timer.time;

  this.callback(dt, mt);

  // if this is falsey, the callback has stopped the task
  if (tasks[this.id]) {
    this.timer.step();
    this.timer.nextFrame(this.update);
  }
};

const run = function(callback) {
  const timer = new Timer();
  const id = taskID++;
  const task = {id, timer, callback};
  task.update = update.bind(task);
  tasks[id] = task;

  timer.step();

  timer.nextFrame(task.update);
  return id;
};

const pause = function(id) {
  const task = tasks[id];
  if (task) {
    task.timer.cancelFrame();
  }
};

const resume = function(id) {
  const task = tasks[id];
  if (task) {
    task.timer.nextFrame(task.update);
  }
};

const stop = function(id) {
  const task = tasks[id];
  if (task) {
    task.timer.cancelFrame();
    delete tasks[id];
  }
};

const stopAll = function() {
  for (const id in tasks) {
    stop(id);
  }
};

export {
  run,
  pause,
  resume,
  stop,
  stopAll
};
