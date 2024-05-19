# Generated by Django 5.0.3 on 2024-05-18 02:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Atleta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('at_nome', models.CharField(default='', max_length=100)),
                ('at_dnasc', models.DateField()),
                ('at_modalidade', models.CharField(default='', max_length=70)),
                ('at_nota', models.IntegerField()),
                ('at_posicao', models.CharField(default='', max_length=70)),
                ('publicado', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'atletas',
            },
        ),
    ]