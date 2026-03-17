fetch(`/schaufenster/api/properties.json`)
  .then(response => response.json())
  .then(Propertiesjson => {

    for (let i = Propertiesjson.last_post; i >= 1; i--) {
      let number = i.toString().padStart(3, '0');

        fetch(`/schaufenster/api/object/${number}/properties.json`)
      .then(response => response.json())
      .then(objectPropertiesjson => {
        object.innerHTML += `
          <div style="
            display: flex; 
            flex-direction: column; 
            width: 280px;
            height: 500px;
            border: 1px solid #ccc; 
            border-radius: 12px;
            padding: 20px;
            margin: 15px; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            font-family: sans-serif;
            background-color: white;
            box-sizing: border-box;
          ">
            
            <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px; flex-shrink: 0; background-color: #f0f0f0;">
              <img src="/schaufenster/api/object/${number}/img.jpg" 
                  alt="Beispielbild" 
                  style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <h3 style="margin: 15px 0 10px 0; font-size: 1.4em; height: 1.4em; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
              ${objectPropertiesjson.title}
            </h3>
            
            <p style="
              font-size: 1em; 
              color: #555; 
              line-height: 1.5;
              margin-bottom: 20px; 
              flex-grow: 1; 
              overflow: hidden; 
              display: -webkit-box;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
            ">
              ${objectPropertiesjson.description}
            </p>

            <button onclick="window.location.href='/schaufenster/view/?id=${number}'" 
                    style="
                      width: 100%; 
                      padding: 12px; 
                      background-color: #555; 
                      color: white; 
                      border: none; 
                      border-radius: 6px; 
                      cursor: pointer; 
                      font-size: 1.1em; 
                      font-weight: bold; 
                      margin-top: auto; 
                      flex-shrink: 0;
                      transition: background 0.2s;
                    "
                    onmouseover="this.style.backgroundColor='#333'"
                    onmouseout="this.style.backgroundColor='#555'">
              Anschauen
            </button>
          </div>
        `;
      })
    }
  })