import React from "react"

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            © {new Date().getFullYear()} RaceStarter
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
