import React from 'react'

export default function Slist() {
  const {symbols} = useContext(DataCtxt);

  return (
    <div>
      {symbols.length >= 1 ? ({symbols}):(<p>nothing has been found</p>)}
    </div>
  )
}
