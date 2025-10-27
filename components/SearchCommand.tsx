import React, { useState } from 'react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { render } from 'vue'
import Button from './ui/button'

const SearchCommand = ({ renderAs = "button", label = "Add stock", initialStocks }) => {
  const [open, setOpen] = useState(true)
  const loading = false

  console.log("Render as", renderAs)

  const setSearchItem = (e) => {

  }

  return (
    <>
      {renderAs === "text" ? (
        <span onClick={() => setOpen(true)} className='search-text'>
          {label}
        </span>
      ) : (
        <Button onClick={() => setOpen(true)} className='search-btn'>
          {label}
        </Button>
      )}

      <CommandDialog open={open} onOpenChange={setOpen} className='search-dialog'>
        <div className='search-box'>

        </div>
        <CommandInput value='' onValueChange={setSearchItem} placeholder='Search stocks' />

        <CommandList>
          <CommandEmpty>{loading ? "Loading..." : "No resultd"}</CommandEmpty>

          <CommandGroup heading="Stocks">
            <CommandItem value='AAPL'>AAPL</CommandItem>
            <CommandItem value='GOOGL'>GOOGL</CommandItem>
            <CommandItem value='MSFT'>MSFT</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchCommand