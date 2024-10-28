const users = [
    { id: 1, name:"Nimesh" ,  email: 'nimesh@123gmail.com' , password: 'Nimesh1234' },
    { id: 2, name:"Pruthvi" , email:'pruthvi@123gmail.com' , password: 'Pruthvi1234' },
  ];
  
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const {name, email, password } = req.body;
  
      const user = users.find((u) => {
        if(u.name === name && u.email === email && u.password === password)
          {  return u  }
      });
  
      if (user) {
        res.status(200).json({ success: true, data: user });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
  }