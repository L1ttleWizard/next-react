async function getData(){
    const response = await fetch('https://esp-32-demo-f34e1-default-rtdb.europe-west1.firebasedatabase.app/test_bat.json')
    const data = await response.json()
    return data;
  }