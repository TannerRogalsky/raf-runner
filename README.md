# raf-runner
Simple API for running a function in a requestAnimationFrame loop.

## API
`import { run, pause, resume, stop, stopAll } from 'raf-runner'`

### run(callback) -> id
Takes a callback and returns an identifier. The callback will be invoked every requestAnimationFrame with the time since the last requestAnimationFrame and the time since the loop was set up `(dt, mt)`.

### pause(id)
Pauses the identified loop.

### resume(id)
Resumes the identified loop if it had previously been paused.

### stop(id)
Stops the identified loop. This will reset any `mt` value.

### stopAll()
Stops all running loops.
