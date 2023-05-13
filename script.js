const fetchDataFromAPI = (url, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }, delay);
    });
  };
  
  const PromiseAPI1 = () => {
    return fetchDataFromAPI("https://dummyjson.com/posts", 1000);
  };
  
  const PromiseAPI2 = () => {
    return fetchDataFromAPI("https://dummyjson.com/products", 2000);
  };
  
  const PromiseAPI3 = () => {
    return fetchDataFromAPI("https://dummyjson.com/todos", 3000);
  };
  
  const displayDataInTable = (data) => {
    const tableBody = document.querySelector("#data-table tbody");
  
    const row = document.createElement("tr");
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const cell = document.createElement("td");
        cell.textContent = data[key];
        row.appendChild(cell);
      }
    }
  
    tableBody.appendChild(row);
  };
  
  const fetchDataAndDisplayInTable = async () => {
    try {
      const data1 = await PromiseAPI1();
      displayDataInTable({ "API 1": JSON.stringify(data1) });
  
      const data2 = await PromiseAPI2();
      displayDataInTable({ "API 2": JSON.stringify(data2) });
  
      const data3 = await PromiseAPI3();
      displayDataInTable({ "API 3": JSON.stringify(data3) });
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchDataBtn = document.querySelector("#fetch-data-btn");
  fetchDataBtn.addEventListener("click", fetchDataAndDisplayInTable);
  