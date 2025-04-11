export default function Footer (){
    return (
        <footer style={footerStyles.container}>
        <div style={footerStyles.innerContainer}>
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          <div style={footerStyles.links}>
            <a href="/privacy-policy" style={footerStyles.link}>Privacy Policy</a>
            <a href="/terms-of-service" style={footerStyles.link}>Terms of Service</a>
          </div>
          <div style={footerStyles.phone}>
            <p>Contact us: <a href="https://wa.me/01091518340" style={footerStyles.link}>+20 01091518340</a></p>
            <p><a href="https://hamada-elsayed.github.io/h-portfolio/" style={footerStyles.link}>Hamada-Elmorsy</a></p>

          </div>
        </div>
      </footer>
    )
} 

const footerStyles = {
    container: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
    },
    innerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    links: {
      marginTop: '10px',
    },
    link: {
      margin: '0 10px',
      color: '#fff',
      textDecoration: 'none',
    },
    phone: {
      marginTop: '15px',
    },
  };