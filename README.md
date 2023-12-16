# Friend Zone

In this project we can show the data of a particular item like- information of a friend and the full post using button and link both. Here I have use the hook useLoader() to load the data from the router. I have made the path dynamic using : symbol. Using id we get the particular item information

There I have used useNavigation() hook to find out the state of the router for loading the data. If there is delay we can see a spinner.I have used 'react-spinner' library.

Here I have also used useNavigate() hook to handle the dynamic path and back to the previous page.

At last there is not found page if the path is wrong. There is * in the path.

Sometimes we face problem in netlify when we reload the other pages again. There is 404 not found page. To fix this issue, you need to create a _redirects file inside your public folder. Inside the folder we need to write:

/* /index.html 200

