Notes 

- New Error I get  is Cannot destructure property 'basename' of 'React2.useContext(...)' as it is null 

 The Reason is <Link> looks like it’s trying to access the context of the Router, and isn’t finding it. 
 this happen when our navBar outside the BrowserRoute the same thing happen when i try to use useNavigate on views so i moved the browserrouter to the app.jsx