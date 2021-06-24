const state = {
	skills: {
		loading: false,
		items: [
			{
				name: {
					rus: ' Накопление положительных эмоций',
					eng: 'collect',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				rule: {
					1: 'Доброжелательным (быть)',
					2: 'Расположение (показать)',
					3: '(Успешно) валидировать',
					4: 'Говорить (непринужденно)',
				},
				name: {
					rus: 'ДРУГ',
					eng: 'GIVE',
				},
				description: 'создание и гармонизация отношений',
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'СТОП',
					eng: 'STOP',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'ПОПРОСИ',
					eng: 'DEAR',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: 'Достичь своей цели без ухудшения отношений',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'принимающие ладони',
					eng: 'accept',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'эффективно (как)',
					eng: 'how',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				name: {
					rus: 'ТРУД',
					eng: 'NONE',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'Родикальное принятие',
					eng: 'Rodical',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'готовность',
					eng: 'ready',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'забота',
					eng: 'CARE',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'проверка фактов',
					eng: 'check',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'Вовлекаться (что)',
					eng: '--',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				image:
					'data:image/png;base64,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',
				name: {
					rus: 'ЧЕСТЬ',
					eng: 'FAST',
				},
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'накопление положительных эмоций (краткосрочных)',
					eng: 'collect 2',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'тефлоновый ум',
					eng: 'teflon mind',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				name: {
					rus: 'мудрый разум',
					eng: 'mindfull',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				name: {
					rus: 'решение проблемы',
					eng: 'solve',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'ЧТО',
					eng: 'What',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				rule: {
					1: 'Осознавайте Другого',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				name: {
					rus: 'Валидация',
					eng: 'Validation',
				},
				description: 'Эмпатия + сообщение об этом',
				priority: 4,
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'справляться заранее с проблемами',
					eng: 'coupe ahead',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'плюсы и минусы',
					eng: 'plus and minus',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: ' разворот сознания',
					eng: 'Mirror',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'противоположное действие',
					eng: 'reverce',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'легкая улыбка',
					eng: 'smile',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				name: {
					rus: 'наблюдать',
					eng: 'whatch',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				name: {
					rus: 'однонаправленно',
					eng: 'focus',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				name: {
					rus: 'список ценностей',
					eng: 'values',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'мастерство',
					eng: 'master',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				name: {
					rus: 'безоценочно',
					eng: '---',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				name: {
					rus: 'самоуспокоение',
					eng: 'calm',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
		],
		groups: [
			{
				id: '4DcOXLd2nLlhBix4Ob9Q',
				color: 'green',
				name: 'Социальная Эффективность',
				priority: 4,
			},
			{
				id: 'cUOd20iSoc6GBPgmkF4k',
				color: 'brown',
				name: ' Эмоциональная Регуляция',
				priority: 3,
			},
			{
				id: 'jxB5g68YSOrTaXzOO7IN',
				color: 'red',
				name: 'Перенесение Стресса',
				priority: 2,
			},
			{
				id: 'y6NHbfGwf9jjd6jSvIZr',
				color: 'blue',
				name: 'Осознанность',
				priority: 1,
			},
		],
		error: false,
		skills: [
			{
				id: '0pjetQlE4ZsapryzsDEu',
				name: {
					rus: ' Накопление положительных эмоций',
					eng: 'collect',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: '4UeAJKWH3AwfoSBqtgWw',
				rule: {
					1: 'Доброжелательным (быть)',
					2: 'Расположение (показать)',
					3: '(Успешно) валидировать',
					4: 'Говорить (непринужденно)',
				},
				name: {
					rus: 'ДРУГ',
					eng: 'GIVE',
				},
				description: 'создание и гармонизация отношений',
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				id: '60ndDO2lujQRCEuQBST5',
				name: {
					rus: 'СТОП',
					eng: 'STOP',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: '7QAHSWeY5YOAtvVnRQ8H',
				name: {
					rus: 'ПОПРОСИ',
					eng: 'DEAR',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: 'Достичь своей цели без ухудшения отношений',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				id: 'ALCtYPF4MH9Au4iC8xPg',
				name: {
					rus: 'принимающие ладони',
					eng: 'accept',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: 'FOspGK4dV7hCqM578pBq',
				name: {
					rus: 'эффективно (как)',
					eng: 'how',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'Fp15nZERpC1vri4ROd04',
				name: {
					rus: 'ТРУД',
					eng: 'NONE',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: 'GPlqhHXwoYCpu6Cf6Inr',
				name: {
					rus: 'Родикальное принятие',
					eng: 'Rodical',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: 'IUVHOHGstHRND2ocNykk',
				name: {
					rus: 'готовность',
					eng: 'ready',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: 'JR2Od99jjnQiOdEo15xF',
				name: {
					rus: 'забота',
					eng: 'CARE',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'M73Urh1L5A0L9fDGCtqA',
				name: {
					rus: 'проверка фактов',
					eng: 'check',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'PZpoNCCMGowD6hwUtc23',
				name: {
					rus: 'Вовлекаться (что)',
					eng: '--',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'Q24s1BbyteWRDMBKHt8F',
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				image:
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABCFBMVEX////xWk/QNjQREiQAAADa2tv45ePwSzvPMC7OJiPnsK7NKCfVZWPjnJvNHx304OD79PTRODjxVkvwTUDxfnbPLSv55OHsVUsAABfxUUUAABoAABPdgX8AABz78fDvTT/vZFkAAA8ADyP529rxcmnympT2x8T0r6rxj4jvaV/YcG7hlJOcnKCNjZX1urbvX1LylI31wb7xfHTzp6HXbm3UVVTw0dHtxMTSS0mzOTq0MjMpKTYZGypnaHF5eYFBQUxNTVeDg4tbW2YuLzvyhYHUWlfeiIbMEg7ntLPkpKTdRD/RQkHhhYPc5OTVy83RurzHoJ/Diou+dna5YGG2UFE6OkStrbGXmJwlhFfgAAAOOklEQVR4nO2dC1viyBKGuamJuAwmBglIgBNAUAGB0XEOEK7qzLjj7E35///khIAaSKdTFZIOevZ7lt2VS8hLV1dXV1cnoZCfSipqpXFarh6VaoVmWFezUCsdVcunjYqqJH39ar+kqK3OtBQWRVmWBUEIv0n/S5DlfF4UStNOS1WCPlOEPrUuDaQVHoLmgGK4dNn6FPQZA5RqTOW8I9IaXl6eNlJBnzlFyUq5ticjmEx08l6tXNnOXlepNkVMS1lbTmxOK0FTrOu6KosbQL3CiXL1OmiWN+12CnseUL2wFTq7QRMZup7KsldUCzRZngbfbI2CFyZoYRMLjSCplNOwH1gLtPBpUE4yedr0C8tAk5vBoJ2G3Q1ZGLTwKXOsVtNbj2EjudliiqWW/DRCswSxpDLDUqqssBZoVUYzgEaeiRW+Sc6z8P2ptsgWay6x7Xvwf7qJK3QfIwuyv/5xt+S6ufRAKVwoNAW3P4zY9jGCbB27/ckFedpKKclkMlW5FNx1UUHwzfOX8y6xwrK5jyjlPXdHyZd9wdqtuXaG8uXqoVoujyQXfDDHygY9v7R+sEuXZILg+RT7dIOxS7YMQynXPijvsXesbjJ45a2DkPufSax6iKW0N4o1RCuYdOz6aHLbs8mM4t5t2IHFIz/ck9U8ih13cW5DmCe15w86WOSH60YTBE+co4riEuR2p6Kq6nVjGn5pZzJYxH2jCYIHUxkc11717cdUOsvZjR3Ykmy+SoEcSjwgU/OY75RXo57lj2ILFokc67FjoT09qoVxOTwhvyHZNerrLCH44uP2YBx/cr30cWoHl2yQN0o9IvtX2OKI2wINTLoxn51SxcSiG1ljCjfHsIZOoY5MAeNu1n4IVKQlyK4nn7thXJ8WjiyH+I0GlrBYUwFnIC69frKG9VUEsPixPdih5elznAepuYtB0HEUESxybAfGHVie3udRo7bcdsNVRcdRZLDIMQYsgiNzERGf4uN5G7AIIbq3B8ORiehZTMXFPMUOLIECQ5IhZ567buJ5WzBruQMNDGmNONcIcIiCLOrh1rz2wWswFJlQw3A5j5TCXqmhGvm0xtHLArRnYCiy9UwRTS3H2EZumwIaZelAvQNDkeXB+cZdRztc/5UWLtRDMJw1QrtZyQlMKKx/ZCp4DIYhI8SoRDmPYNZ8mpr3GgxDBhvNPjl7+j3LwJQMew6GIQMF+m1nT79nMerkD8FzMASZAAgaG4CQgwB2qJ+G12AIMtFxzVOBzGJJYFzkh+dgCLK8U64RFNOTwSIRz8HgZE5x/jUo9rUBI5zppmBwMpGe3HEcwliDgcnog1kLNllhCQYmE2mRFfAYTMGgZELYnqsDnIWxBYOSyR07riTsAMzBwNZol7SCNhhzMCCZXZMpQKwAwKBtRh6l4evn7MFgZDZ1SfD4JQAwGJlA4mrAE1NBgIHIiLEwYkEgEDAImXVqj8uQBgMGIctb86dHiKWVgMAAZNaZUwqT+g0KDEBmSQyDB+dAwZzJLIN0E1X0EBgYoM1Wj4hbXAkQzJFsbfllilqVDRLMiUyYrpwXbtUoUDAnMtkc4yNrWYMFcyCTzbaIs8SgwehkZltUmiiuwMHoZM23yQt2wTlwMCqZyS9eIitVggejkQlvi3eoSp/tAKOQvYX4KezOhW0Ao5C9rnIhpphbBGZP9rouiZmxbBGYLdnr3AVdhLMlYLZk8uJoKfQmo20BsyNbFgyju9j2gNmQLTtZFb3NaHvAyGTCYhUQtia2pWBkMmOtDJ7Z3kowMtk8XFTxGxS3CoxEZngPF/sKtwuMQGasbpa3GYzjEwlJP4LxbziZPN+mipxksgTj+Nt91ZjpK1/uIoi8vjHZxFbXswPjD8wlDsnvEgclm5edJl1slmUDxt+tvarag1nIkiHFRbk2AYyLSxJ/awVLSJJ0bwWbP014uxmMs778JQElE5WQ6g3Y3Ymu3yyn8m3+9Im1AvSE/HYzGP/F8nLoCtpmouqqwN4K5pFWwAhfcgb1jXLFRQjMCCxO+JITGpiZTA+DUcss2w1mIpM7obInXpERGNUUzWRC2cWkZYvBXsn0iQugBPgdgb2QCUehEp5rm8FeyEqh2rsCo4xjK2R6TFX4aGALskIIudDyDsAMsia0qPQ9gRlkHxJsTvYxwXSyDwoWCb8z5+E8ji11+AHdvaGHjzdAL3TjIsEdINhnMNgVftXvXYBxB+9r2gIHO3lfE00wmHTn6mp1gSVzwGDx79ubzCGBHUDB+P3tTb+RTBEO9sWjhKkPYNImYAkVto02CLAIYQcOHEyBbxpjDfawCRiXdLO2zgSMuyK8DvWKxoddjNBMwD4TXofGitJZCLmVgB1Y/JzwOrTFjA+78PcswHjShm1oiyW+hZC7WtiBWa+fhgDj50uNCmr3ByswoiWCTfHQ8KhelBx5DsYTt/4C3f1ylRcf3/sPxn8nvg4EkxbL8vjSHN/BiIOYrlsYGP/NePeuBxWmHoPx5HvIJW9gYInl+aEvz+83GG+tJ1iAPYC4Itzy/ejYw2cw7sbmZQXYxc6W70d3Mp/BbAxR7zSUAhaTll0MeAEgdmB2hkivzDEp8Xp62JHMVzA7jxiCljOaDoCNg30FI1Reveg87oy1ErRg0wN+gtkbInQYM11+OIlcmfARjGKIoRCssPbBFI0hN5D5CEacrSx1DfId8RPzR3C26B/YPTGoXwrWxVZ/GhSXj2AR2quwuINb+QyulNs3sO+065xdg7qYtFpwi/OLvoFRL7nnUNO3VGLtMvioMdo3MJo+gbgscSZqbSIQMNjCumWGitq6EwTYN1icyFmsGTOUBQCmwAZn6cTyScympADAPsMqPEjjO6LUlD0Y1BCtmxBQGWHmYMCpcyRB2ISA2b3DHAxoiJEH4qedr5keFBjQEBcpe4LATcYYTIFh2SeBwEkdxmAnoKjeKBWwEfTyF2zBgCmcCEfuYXNVgL2MKVgyvpFLXAgYCjMFgxqibQ+bCziTZgkGNUTCLaTMgm2xZQiWfMCsp9vL+T4ZjMGghkisUDILlDtlB3Z9D+TiaVkgQ5AVaWZgYEPkiGvxK4L4D2Zgd1BDpLn6FwFutMcKDJYhjawlSe2UdN5iwArsEGyIoHviVRyvv8UI7A56EYx7gCHO5XjDDJEJmLeGaMhp/rLp/VRBgpYI0GOpVakOTYa9/5wrnUMNMY64uWuDHubb3+TAO6ngGJFcxGMjejcjXcvba0GH5jg9RlyXw11P/XeLUEO03O/WSSnqfYV9t0UVGnJI9kvxNqKGVoLN3Rs8E+2KJGZBQql1ndIciHF9JP/0GzTfhnIcLyrT2kz2cyj7BOSyXC4IqCnFNQpNb1lWBC1LJFWwg0S7cbJsvdmYVwJ6xDhpBQImqtPH3HEUpe8wQ5Swjt4shUo2dT6AC0FXjEh7X+Cik9V8GKeB7bUhl05GS3sLx67cLUXJM6Adbsrl0GZh8cbFCGmv/UPYQph040GAkCzRAmIhwZ1fKxt049evUa7P4zzMz8evPPjCEN3rh48j8UT85vZgQ93e6IcBUenj1603XPokhhaDHOtfxXkgIJXOhZuoUNWhJhvBp+SJEo45X4waMs2FMOWyXbZ0J5U6P2OGxWESHDDRneMhGy7+yo95IHUaw4Qs8bsPWKF57Q7FHP0n4+zKODbXLs0c/Sbjr/zMIHUojfbDTywuQdlo4IXUmn2j+UjGP3juDS3q2A9pfpFJzguxXijVts1f+UOWuEUnD12qFbazRx/I4pxvzpCgsp09ek0m8XdehfIw7VZt/KOnZFzijJUVvkk9IqN5R8YlDvz3hUS0NhHNIzIpcRsMloE2lQluxAuyOH8WHNZcqbJg9SObknF8/I5931pXstG0WORGZFIi8p2tJ7SVWg2vsbkm43guYBtcldKa5lfYXJFxfOLgm89LingpjfaeqbthyTiJv7/d3zqqhZKVy4IsL7MjGDKJ5x9OvmxJx7KR2qjWRHHedMewlorziYezfRa1PhsruVvplPJ7Yj5OS4NyuvEl7hNX5992t7up1qVcN8oHNw8RKS5J5kSvDqQ/FXm4Ofh9/4uPs/0d//Tz58+dx1+//vjzr7//+fr1v4a+fv3n77/+/OPXr0fjZf8UivmsYjGbzuX+Y1Iul84Wi35/byj6QfUv2HsTFSyTW/lr+XgfWoI96Y9ub/H/k5fX0uNxdvL08ldvmIl2x5PoO9ECLNfvZ9L1dDYdTWdj9V4mm81ksrFnXdpFLBuLRTOx2GQnFnsaDQI+X7CWLdarZ3sjbTaKaTNtNJvMZtrgYrgzjMX6P8f1nZ3uYGdn+DjQ//tEP5zHypht/+V/c2tvSRtP6W/tRXO9zMvLS7BsPdrva2mt34/FRrl6NKZp4+LgcWfUn3UfY/3nx6dY9+dOhnUXG2W0aC7TfYrqvaQ36j9lurlcb6QzdOfPdPV/+rPo80Q/2dmwPu7PRv1BXcuYwTLjcX0809kGmWw9d1FM90fDXDGW29Fmw+fY0/NjsaiDdXOUk/BBaf2ML+ra+HkwGs2Go/HzWBvpf40yg9FwNKprFyMtqkUvYmNtWL+IXfS0fl3rjlbAorlnrVfPdLuzaG887o+j9fEwd9Gv6+Y32dEetdmzNngc7hTZgmUGzxO9KYb6o36RG1/ov3y9PrwYPQ21sc41Gc20Yr33PK5Pxheapo2i43pfq2dXwfq9XFdvRv1R7Mf69d5kkhnORumsDjgbZ4v9ercf01i7jswkN+nmBulJt9fNPfWivadobtDtDTJPvUmvF+12B9FhbzgZDifdzCDTzXQn2cGyu7yOY3MrS2eMh94B08ZTupeM6v0qO++b2dWevDWanxWp7/9/Rh7vWf+CvTf9D2Y4B3wrVnZFAAAAAElFTkSuQmCC',
				name: {
					rus: 'ЧЕСТЬ',
					eng: 'FAST',
				},
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				id: 'STugS2UUfO7DE6kftCtr',
				name: {
					rus: 'накопление положительных эмоций (краткосрочных)',
					eng: 'collect 2',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'VQO02QWgjFTkjQssgqB2',
				name: {
					rus: 'тефлоновый ум',
					eng: 'teflon mind',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'WQpEE66tmOrQNpO2mtxp',
				name: {
					rus: 'мудрый разум',
					eng: 'mindfull',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'WTrcSSTxHoTAkco06fuS',
				name: {
					rus: 'решение проблемы',
					eng: 'solve',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'ZLBkbsZ2HTKcLR2ke74C',
				name: {
					rus: 'ЧТО',
					eng: 'What',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'b908okE0J8Xf0QmpW54l',
				rule: {
					1: 'Осознавайте Другого',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				name: {
					rus: 'Валидация',
					eng: 'Validation',
				},
				description: 'Эмпатия + сообщение об этом',
				priority: 4,
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
			{
				id: 'bLiOWGesUtAcqYA6oJiw',
				name: {
					rus: 'справляться заранее с проблемами',
					eng: 'coupe ahead',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'bv8PCRJqK8mlUiC5qnUq',
				name: {
					rus: 'плюсы и минусы',
					eng: 'plus and minus',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: 'fPlrvs047JOvEaXzgBnO',
				name: {
					rus: ' разворот сознания',
					eng: 'Mirror',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: 'qVBLXO062aK79T6gRqoh',
				name: {
					rus: 'противоположное действие',
					eng: 'reverce',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'tX9HP8kvPNhzGQp4IPmh',
				name: {
					rus: 'легкая улыбка',
					eng: 'smile',
				},
				skillGroupID: 'jxB5g68YSOrTaXzOO7IN',
				description: '123',
				group: {
					name: 'Перенесение Стресса',
					color: 'red',
					priority: 2,
				},
			},
			{
				id: 'ttvp7AlAlQVuAoXwWvrx',
				name: {
					rus: 'наблюдать',
					eng: 'whatch',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'ubkAVLLeUNOxZGIdK0gq',
				name: {
					rus: 'однонаправленно',
					eng: 'focus',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'xIi8Hw4uUoC29FnVfMcG',
				name: {
					rus: 'список ценностей',
					eng: 'values',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'xNVaKHfVC6q6jdVrctOX',
				name: {
					rus: 'мастерство',
					eng: 'master',
				},
				skillGroupID: 'cUOd20iSoc6GBPgmkF4k',
				description: '123',
				group: {
					name: ' Эмоциональная Регуляция',
					color: 'brown',
					priority: 3,
				},
			},
			{
				id: 'xizgUxc2RotT9jn5lEVT',
				name: {
					rus: 'безоценочно',
					eng: '---',
				},
				skillGroupID: 'y6NHbfGwf9jjd6jSvIZr',
				description: '123',
				group: {
					name: 'Осознанность',
					color: 'blue',
					priority: 1,
				},
			},
			{
				id: 'ySvMzFytZ88pRLfUoUZ9',
				name: {
					rus: 'самоуспокоение',
					eng: 'calm',
				},
				skillGroupID: '4DcOXLd2nLlhBix4Ob9Q',
				description: '123',
				group: {
					name: 'Социальная Эффективность',
					color: 'green',
					priority: 4,
				},
			},
		],
	},
	profile: {
		loading: false,
		error: true,
		profile: {
			photoURL:
				'https://lh3.googleusercontent.com/a-/AOh14Gh7Lk3IO5vgi3LvCCQSlbdHGMVX9gtSaWSsd3aYWaM=s96-c',
			uid: 'gqMY6rNGeRVz37NwOLJ5o8pVbQv2',
			isAnonymous: false,
			metadata: {
				creationTime: 1620052531904,
				lastSignInTime: 1621712922284,
			},
			tenantId: null,
			refreshToken:
				'AGEhc0DypnWYcQN_XJpPAQ7YBrn8XAR6ib_R0kmJ14FBus-P0JMXsl35VWlH16uTueVOw3xeyaeAN-xieXmvzsFY4fArJN64IZULA2C8ievVTqNF-FMpnsMqOTLQkbBZLB1mhRUenPrvq6nWf0e5t_IhHmNcjPAtnDF5eqZiswyeg0jeUmvJ-4I3XklBt_LaBE48YInI2l2oHV71yd9UrkkusZrKgcTjyd739ga9X50nXb3HKp4nXHQHqJq8M_pColLkz57HNZU-uf8Lvdu71yjlnlcy4VRWgw',
			providerData: [
				{
					providerId: 'google.com',
					uid: '117167321165413789888',
					email: 'mezhinsky.dmitry@gmail.com',
				},
			],
			emailVerified: true,
			providerId: 'firebase',
			email: 'mezhinsky.dmitry@gmail.com',
			displayName: 'Dmitry Mezhinsky',
			phoneNumber: null,
		},
	},
	_persist: {
		version: -1,
		rehydrated: true,
	},
};

const skills = state.skills.skills;
const groups = state.skills.groups;

function compare(a, b) {
	if (a.priority < b.priority) {
		return -1;
	}
	if (a.priority > b.priority) {
		return 1;
	}
	return 0;
}

function joiner(inputSkills, inputGroups) {
	let sortedGroups = inputGroups.sort(compare);
	let newArr = [];

	sortedGroups.forEach((group, index, arr) => {
		newArr.push(group);
		const f = inputSkills.filter(skill => skill.skillGroupID === group.id);
		f.forEach(filtred => newArr.push(filtred));
	});

	return newArr;
}

console.log(joiner(skills, groups));
// joiner(skills, groups);
