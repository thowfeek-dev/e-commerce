import { Button, Container, HStack } from "@chakra-ui/react"

const Navbar = () => {
  return <Container minH={"1140"} px={4}>
    <flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
    >
        <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradint={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
        >
            <Link to={"/"}>E commerce 🛒</Link>
        </Text>
        <HStack spacing={2} align={"center"}>
            <Button>
                <PlusSquareIcon />
            </Button>
        </HStack>

    </flex>
  </Container>
};

export default Navbar