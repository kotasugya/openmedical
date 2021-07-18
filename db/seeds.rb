10.times do |n|
  Company.create!(
    name: "クリニック#{n + 1}"
  )
end


ReviewCategory.create!(
	[
		{
			name: '人間関係・職場の雰囲気',
		},
		{	
			name: '働きがい・成長',
		},
		{	
			name: '入職理由と入職後のギャップ',
		},
		{	
			name: '退職検討理由',
		},
		{	
			name: 'ワーク・ライフ・バランス	',
		}
	]
)