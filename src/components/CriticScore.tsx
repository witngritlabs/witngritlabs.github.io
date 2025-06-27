import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 92 ? 'green' : score > 85 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore