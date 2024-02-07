async function fetchData() { 

    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/search',
      params: {
        query: 'Apple',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'df8ad68d0bmsh5bf709bc595a29bp11edeajsnd8a5805de242',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
      }
    }
  try {
    
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
    }
  }
    return(
      <div className='App'>
        <button onClick={fetchData}>News</button>
        {fetchData.map((data) => {
          return (
            <Card 
            key={index}
            hoverable
            style={{with: "70%"}}
            >
              <Meta title={item.title} description={item.content}/>
            </Card>
          )
        })}
      </div>
    );
