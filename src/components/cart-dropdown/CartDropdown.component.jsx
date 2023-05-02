import Button from '../buttons/Button.component' 

function CartDropdown() {
  return (
        <div className="absolute z-20 right-11 top-16 card w-64 min-h-[300px] bg-base-100 shadow-xl">
          <div className="card-body justify-between">
            <div className='pt-9'>
              <h1>Your card is empty</h1>
            </div>
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
