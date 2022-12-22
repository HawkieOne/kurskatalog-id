import Text from './Text'

export default function Footer() {
  return (
    <div className="bg-darkGrey py-4 flex justify-evenly text-whiteBackground">
        <Text>Kvalitetsprojekt inom interaktionsteknik</Text>
        <Text>Umeå 2022</Text>
        <Text  hoverColor="text-pink"><a href="https://github.com/HawkieOne/kurskatalog-id">Github</a></Text>
    </div>
  )
}
