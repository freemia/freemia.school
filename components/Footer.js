import React from 'react'
import { Flex, Grid, Text, Link } from './system'
import { Layout } from './Layout'
import NextLink from 'next/link'
import { Copy } from './bridge'

const Footer = props => {

	const linkArray = Copy.footer.links.map(item => {return (
		<Link
			variant='desc'
			decoration='default'
			mr={{all: 2, sm: 3}}
			sx={{':last-child': {mr: '0'}}}
			href={item.href}
			dangerouslySetInnerHTML={{ __html: item.name }}
		/>
	)})

	return (
		<Layout
			columns='12'
			px={{ all: 2, md: 3 }}
			py={{ all: 3, md: 5 }}
		>
			<Grid
				gridColumn={{all: '1/ -1', sm: '2/ -2', md: '4/ span 6'}}
				px={{all: 2, md: 3}}
				py={{all: 3, md: 5}}
				bg='white'
				flexes='ccc'
				sx={{
					outline: '1px dashed',
					outlineColor: 'blacks.2'
				}}
			>

				<Text
					variant='desc'
					textAlign='center'
					pb='2'
				>
					{Copy.footer.description}
				</Text>

				<Flex flexes='rcc'>{linkArray}</Flex>
				
			</Grid>
			
		</Layout>
		)
}

export default Footer