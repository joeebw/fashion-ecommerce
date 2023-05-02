import Button from '../buttons/Button.component' 

function CartDropdown() {
  return (
        <div className="absolute z-20 right-11 top-16 card w-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <h1>This is the card product</h1>
            <Button 
              selectButton='inverted'
            >
              Check card
            </Button>
          </div>
        </div>
  )
}

export default CartDropdown
