# Generated by Django 3.2.8 on 2021-10-15 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Destination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('destination', models.CharField(max_length=150)),
                ('destination_img', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=250)),
                ('id_destination', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plans.destination')),
            ],
        ),
        migrations.CreateModel(
            name='Photos_destination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('altImg', models.CharField(max_length=50)),
                ('urlImg', models.URLField(max_length=250)),
                ('id_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plans.plan')),
            ],
        ),
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.CharField(max_length=250)),
                ('id_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plans.plan')),
            ],
        ),
        migrations.CreateModel(
            name='No_include',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('no_include', models.CharField(max_length=150)),
                ('id_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plans.plan')),
            ],
        ),
        migrations.CreateModel(
            name='Include_plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('include', models.CharField(max_length=150)),
                ('id_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plans.plan')),
            ],
        ),
    ]
