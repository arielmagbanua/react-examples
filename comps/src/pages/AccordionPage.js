import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Test Label 1',
      content: 'The quick brown fox jumps over the lazy dog'
    },
    {
      id: 2,
      label: 'Test Label 2',
      content: 'The quick brown fox jumps over the lazy dog'
    },
    {
      id: 3,
      label: 'Test Label 3',
      content: 'The quick brown fox jumps over the lazy dog'
    }
  ]

  return(
    <Accordion items={items}/>
  )
}

export default AccordionPage;