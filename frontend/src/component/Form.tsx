const Form = () => {
    return (
        <>
            <form>
                <p>Fill in your details</p>

                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter your name"/>
                </div>

                <div>
                    <label htmlFor="matric-no">Matric Number: </label>
                    <input type="text" name="matric-no" id="matric-no" placeholder="Enter your matric number"/>
                </div>

                <button type="button">Submit</button>
            </form>
        </>
    )
}

export default Form;
// import and export