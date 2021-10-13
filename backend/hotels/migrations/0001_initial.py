# Generated by Django 2.2.24 on 2021-10-13 15:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.PositiveIntegerField()),
                ('address', models.CharField(max_length=150)),
                ('urlImg', models.URLField(max_length=250)),
                ('stars', models.PositiveIntegerField()),
                ('description', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='National_city',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(default='Medellin', max_length=150)),
                ('city_img', models.URLField(default='', max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('services', models.CharField(max_length=200)),
                ('id_hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotels.Hotel')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=100)),
                ('review_text', models.CharField(max_length=500)),
                ('id_hotel', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='hotels.Hotel')),
            ],
        ),
        migrations.CreateModel(
            name='Photos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('main_1', models.URLField(max_length=250)),
                ('main_2', models.URLField(max_length=250)),
                ('main_3', models.URLField(max_length=250)),
                ('main_4', models.URLField(max_length=250)),
                ('hab_1', models.URLField(max_length=250)),
                ('hab_2', models.URLField(max_length=250)),
                ('hab_3', models.URLField(max_length=250)),
                ('hab_4', models.URLField(max_length=250)),
                ('hab_5', models.URLField(max_length=250)),
                ('id_hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotels.Hotel')),
            ],
        ),
        migrations.AddField(
            model_name='hotel',
            name='id_city',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='hotels.National_city'),
        ),
    ]
