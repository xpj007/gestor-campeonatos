# Generated by Django 5.0.3 on 2024-06-06 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Jogo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jogo_camp_nome', models.CharField(default='', max_length=100)),
                ('jogo_cs_nome', models.CharField(default='', max_length=100)),
                ('jogo_cs_placar', models.IntegerField()),
                ('jogo_fr_nome', models.CharField(default='', max_length=100)),
                ('jogo_fr_placar', models.IntegerField()),
                ('jogo_data', models.DateField()),
                ('jogo_local', models.CharField(default='', max_length=100)),
                ('publicado', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'jogos',
            },
        ),
    ]
