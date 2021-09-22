let alarmScadual = process.argv.slice(2).map((time) => Number(time));

for (let time of alarmScadual) {
  if (alarmScadual === [] || time < 0 || typeof time !== "number") {
    false;
  } else {
    setTimeout(() => {
      process.stdout.write(".");
    }, time);
  }
}
