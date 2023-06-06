const typeWriter = (string, delayBetweenKeystrokes) => {
  let i = 0;
  const intervalID = setInterval(() => {
    process.stdout.write(string[i]); // print current character
    i++;                             // increment index so we loop through the string char by char
    if (i === string.length) {       // at the end of the string
      clearInterval(intervalID);
      process.stdout.write("\n");    // add newline at the end to fix the "bug prompt";
    }
  }, delayBetweenKeystrokes);
};

typeWriter("hello from lighthouse labs.", 30);