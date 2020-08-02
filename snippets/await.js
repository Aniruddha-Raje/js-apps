const randForTen = async () => {
    let results = [];
    
    for (let i = 0; i < 10; i++) {
      await timeoutPromise(1000);
      results.push(Math.random());
    }
    
    console.log(results);
  }