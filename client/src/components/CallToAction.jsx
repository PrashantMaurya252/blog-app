import { Button } from "flowbite-react"

function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex flex-col">
                <h2>Want to Learn More About JavaScript ?</h2>
                <p>Checkout these resources with 100 JavaScript Projects</p>
                <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none">
                    <a href="https://www.100jsprojects.com/" target="_blank" rel="noopener noreferrer">100 JavaScript Projects</a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"  />
            </div>
        </div>
    )
}

export default CallToAction
