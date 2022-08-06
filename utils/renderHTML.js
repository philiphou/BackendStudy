function renderHTML(url) {
    switch (url) {
      case "/home":
        return `
                  <html>
                    <h2>Home 页面</h2>
                   </html>
                  `;
      case "/list":
        return `
                      <html>
                        <h2>List 页面</h2>
                      </html>
                      `;
      case "/api/list":
        return `['aa','bnb','cdd']`
                 ;
      default:
        return ` <html>
          <h2>404 not found</h2>
        </html>`;
    }
  }

  module.exports={renderHTML}
  